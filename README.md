# backend-weather-app

*Basic backend weather app*

### Prerequisites

* **npm**

```bash
npm install npm@latest -g
```

### Installation

Clone the repo

```bash
git clone git@github.com:arodriguezge/backend-weather-app.git
```
```bash
cd backend-weather-app
```

Install NPM packages

```bash
npm install
```

### Usage

run in the command line

```bash
node app 'location' command --option
```

#### For example:

Temperature in New York:

```bash
node app 'new york' temperature
```

Hourly weather in New York:

```bash
node app 'new york' weather --hourly
```

Daily weather in New York:

```bash
node app 'new york' weather --daily
```
