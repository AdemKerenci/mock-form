## Running the application

1) Install dependecies on the root folder:

```bash
yarn
```
2) Then build the application:
```bash
yarn build
```

3) Then start the application:
```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the mock form page.

## Running e2e tests

1) Go to `e2e` folder.

2) Install the dependencies:

```bash
yarn
```

2) Run the e2e test after starting the application as described in previous section:

```bash
yarn playwright test
```


## Tech stack rationale

### NextJS
- It is highly popular, opinionated way to bootstrap a react application.

### MaterialUI
- Rich component library with lots of rooms for customization.
- Good documentation and ease of usage.

### react-hook-form & yup
- Very easy to create and validate form flows.
- Since its(react-hook-form) main target of usage is react, it is highly easy to use it with react.

## Room for improvement

- Most of the config and style are in their basic form for demonstration purpose, to make it truly production ready, each of the setup should be revisited and refit to the requirements.

- Phone number validation did not exist on yup base package. There is another package [yup-phone](https://www.npmjs.com/package/yup-phone) that would enable to make validations as easy as the email one. However, I did not use it because I did not thoroughly check the package. Thus, it is not integratated due to the fact that custom implementation might be sufficient depending on the scale of the functionality demanded from the phone number component.

