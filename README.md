# review-pr-webapp

> A GitHub App built with [Probot](https://github.com/probot/probot) that assign reviewer, greet the author, add label based on commit message

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t review-pr-webapp .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> review-pr-webapp
```

## Contributing

If you have suggestions for how review-pr-webapp could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2020 Abhishek Das <i.abhishek.dass@gmail.com>
