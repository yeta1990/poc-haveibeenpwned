![demo_albgarci](https://user-images.githubusercontent.com/65416560/219085805-7b42c8c6-2b11-45d8-a15a-07bd60e971d7.gif)

## Proof of concept with the Haveibeenpwned API 

Built on [Next.js](https://nextjs.org/docs/getting-started), with [Chakra UI](https://chakra-ui.com/getting-started) and Chart.js [Chart.js](https://www.chartjs.org/docs/latest/), embedded in a Docker container

## Live demo
![https://poc-haveibeenpwned.vercel.app/](https://poc-haveibeenpwned.vercel.app/)

## Instructions:

### Requirements for deployment:
-   Docker (https://www.docker.com/)
-   Make ([https://www.gnu.org/software/make/](https://www.gnu.org/software/make/))

### Deployment with docker:
-   Clone this repo, and in the root folder type `make`
-   Wait until server is built and running (you can see log trace by typing `make logs`)
-   Server will be ready in [http://localhost:3000](http://localhost:3000/api/breachedsites)
    
### Other useful commands:
-   `make up`: start container
-   `make build`: build docker image
-   `make down`: stop container
-   `make clean`: remove /node_modules && /.next folders
-   `make fclean`: purge all docker cache from the computer
-   `make logs`: print logs from the next.js server

## Features

### Two pages:
- [http://localhost:3000](http://localhost:3000)
- http://localhost:3000/charts

### Signup page:
It’s a fake signup form, with real field validations:
 - Email: format (by regex)
 - Password: checks [https://haveibeenpwned.com/API/v3#PwnedPasswords](https://haveibeenpwned.com/API/v3#PwnedPasswords) to see if the introduced password has been reported as leaked in any hacked website.
 - Once the two fields are valid, the user is redirected to /charts.

### Charts: responsive page with two data charts
Responsive page with two data charts:
- Number of breached sites. Data is the same as found in [/api/breachedsites](http://localhost:3000/api/breachedsites)
-   Top 10 type of data leaked from breached sites. Data is the same as found in [api/breachedtypes?top=10](http://localhost:3000/api/breachedtypes)

### Components
All components have been created to be as reusable as possible to ease the application growth and maintainability: i.e: AlertBox.js, BoxCharts.js

### Enabled endpoints
| Endpoint                                                                       | Example query                                                                           | What it serves                                                                                                                                                                                                                                                                                  |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| http://localhost:3000/api/breachedsites                                        | http://localhost:3000/api/breachedsites                                                 | Simplified version of https://haveibeenpwned.com/api/v3/breaches with the minimum data needed to build the charts                                                                                                                                                                               |
| http://localhost:3000/api/exposed?hash= {5 first letter of SHA-1 encoded pass} | http://localhost:3000/api/exposed?hash=2BD11                                            | JSON formatted version of  https://api.pwnedpasswords.com/range/2BD11                                                                                                                                                                                                                           |
| http://localhost:3000/api/breachedtypes                                        | http://localhost:3000/api/breachedtypes  http://localhost:3000/api/breachedtypes?top=10 | Count of data types leaked in breached sites, sorted descending, and with option to filter top N. All data types are from:  https://haveibeenpwned.com/api/v3/dataclasses , the hacked sites are taken from  https://haveibeenpwned.com/api/v3/breaches , and this endpoint is the join of both |
