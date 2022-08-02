# CondoHub Reference Design Document

## Users

Each user that has access to the system must have a Google Account.

### Administrator

Administrators are users that administer the syndicate.

### Manager

### Owner

### Renter

### Sub-Renter

### Manager

### Promoter

### General Contractor

### Contractor

## Use Cases

### Perform initial account configuration and authorization

1. Install the condohub cli: `npm i -g condohub`
2. Optionally create a folder to run the commands from e.g. "Documents/CondoHub"
3. Open a terminal and run `condohub init`

The CLI will open the Google Auth consent screen to authorize CondoHub. It will
then save local configuration in ~/.condohub/config.json.

### Create and configure a brand new condo syndicate

1. Init the syndicate: `condohub syndicate create`
2. Follow the steps (name, options, etc.)
3. Open the CondoHub directory in your Google Drive to see all the files and
   forms created.
4. Review your installation configuration at
   [condohub.io/app](https://condohub.io/app)

### Document building information

1. Init the syndicate: `condohub building create`
2. Follow the steps (name, options, etc.)

### Document personal unit information

### Create and maintain a maintenance schedule for all activities

#### Create Maintenance Calendar

1. Init maintenance list from command `condohub maintenance create`
2. Review list in Google Sheets
3. Create shared calendar from command `condohub maintenance create-calendar`

#### Update Maintenance Calendar

### Manage multiple syndicates at the same time

### Share information with another syndicate

### Export syndicate information
