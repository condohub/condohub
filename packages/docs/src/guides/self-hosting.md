# Deployment and hosting Guide

This is a step-by-step guide on how to **self-host** Condohub on your own Google
Cloud project.

## Requirements

- Google Cloud account with billing enabled

## Configure Google Cloud

### Project

Follow the steps to create a Google Cloud project (e.g. `my-condohub`):
https://developers.google.com/workspace/guides/create-project

### APIs

[Enable](https://developers.google.com/workspace/guides/enable-apis) the
following Google Workspace APIs:

- Apps Script API
- Google Drive API
- Google Sheets API
- Google Workspace Marketplace SDK

### Authentication

Setup
[authentication](https://developers.google.com/workspace/guides/auth-overview),
fill in the informations for the conscent screen and enable the following
scopes:

- .../auth/script.metrics

## Configure Condohub
