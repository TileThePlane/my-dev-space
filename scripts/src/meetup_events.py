# std lib import
import datetime
import os
import pprint
import requests
import json

# 3rd party imports
import meetup.api


MEETUP_API_TOKEN = os.getenv("MEETUP_API_TOKEN")
EVENTS_ENDPOINT = os.getenv("EVENTS_ENDPOINT")

client = meetup.api.Client(MEETUP_API_TOKEN)


def get_events_by_member(member_id):
    """ Gets events for a specific member using a given members id.
    """
    response = client.GetEvents({"member_id": member_id})
    return [event for event in response.results]


def _transform_event(event):

    created = datetime.datetime.fromtimestamp(int(event["created"] / 1000)).strftime(
        "%Y-%m-%d %H:%M:%SZ"
    )

    start = datetime.datetime.fromtimestamp(int(event["time"] / 1000)).strftime(
        "%Y-%m-%d %H:%M:%SZ"
    )

    #TODO update to end time
    end = datetime.datetime.fromtimestamp(int(event["time"] / 1000)).strftime(
        "%Y-%m-%d %H:%M:%SZ"
    )

    # TODO calculate duration fo event
    duration = 10000

    return {
        "name": event["name"],
        "description": event["description"],
        "url": event["event_url"],
        "start": start,
        "end": end,
        "duration": duration,
        "topics": [],
        "entry": ['free'],
        "category": event["group"]["name"],
        "source": "meetup",
    }


def _post_payloads(payloads):
    responses = []
    for payload in payloads:
        r = requests.post(
            EVENTS_ENDPOINT,
            headers={"Content-type": "application/json"},
            data=json.dumps(payload),
        )

        responses.append(r)


if __name__ == "__main__":
    member_id = "135086862"

    events = get_events_by_member(member_id)
    transformed_events = [_transform_event(e) for e in events]

    _post_payloads(transformed_events)
