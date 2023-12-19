import json
import time


# Replace with JSON file's name and path
fileName = '/Users/arbabhusain/Desktop/Projects Folder/CiPASS Tracker/file_name.json'

# Function to read latitude and longitude from the JSON file
while True:
    def read_lat_long_from_json(file_name):
        with open(fileName, 'r') as file:
            data = json.load(file)
            latitude = data.get('latitude')
            longitude = data.get('longitude')
            print("Latitude", latitude)
            print("Longitude", longitude)
    
    read_lat_long_from_json(fileName)

    time.sleep(5)

