# New images.nypl.org

images.nypl.org was originally a PHP application.
Recently, we've been trying to serve our images from [our IIF Image Server](https://github.com/NYPL/cantaloupe).

## If We Have A IIIF Image Server What's This Repo?

There are too many places that reference the legacy PHP image server for
us to realistically hunt down. For example, a news organization could be hot-linking
to iages.nypl.org (tut-tut). _This app is a shim that is API compliant with the old
images.nypl.org, but ultimately turns it into the appropriate IIIF request, and proxies
the IIIF image server's response._

## Design

_TODO:...._

## Running Locally

_TODO:...._

## Git Workflow & Deployment

_TODO:...._
