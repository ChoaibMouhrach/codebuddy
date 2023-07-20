# CodeBuddy

CodeBuddy is an online platform built with TypeScript, Next.js, and Tailwind CSS that allows users to share links, images, and code snippets with ease.

## Features

- **User Authentication:** Users can sign up and log in to CodeBuddy using their email and password, ensuring secure access to the platform.
- **Link Sharing:** Users can share links with the community by submitting the URL along with a title and optional description. Other users can then view and interact with the shared links.
- **Image Sharing:** Users can upload and share images by selecting the file from their device. Shared images are displayed along with their associated metadata.
- **Code Snippet Sharing:** Users can post code snippets by specifying the programming language and pasting the code. Code snippets are highlighted for easy reading and can be copied by other users.

## Technologies Used

CodeBuddy utilizes the following technologies:

- **TypeScript:** The entire project is written in TypeScript, providing static typing and enhanced code readability.
- **Next.js:** Next.js is used as the framework for building the web application. It provides server-side rendering, static site generation, and other powerful features out of the box.
- **Tailwind CSS:** Tailwind CSS is used as the styling framework, allowing for rapid development and easy customization through utility classes.
- **Other Dependencies:** The project incorporates various additional dependencies such as Axios for API calls, react hook form for form handling, and React Query for managing data fetching and caching.

# Getting Started

To run CodeBuddy locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/pacy2/codebuddy.git`
2. Navigate to the project directory: `cd codebuddy`
3. Install the dependencies: `npm install` / `yarn install` / `pnpm install` 
4. Start the development server: `npm run dev` / `yarn run dev` / `pnpm run dev`
5. Open your browser and visit `http://localhost:3000`

## Configuration

CodeBuddy requires some configuration to connect to external services or APIs. Make sure to set the following environment variables located in the .env.example file

## Contributing

Contributions to CodeBuddy are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-branch`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push the changes to your branch: `git push origin my-new-branch`
5. Submit a pull request detailing your changes.

Please ensure that your code adheres to the project's coding conventions and is well-documented.

## License

The CodeBuddy project is licensed under the [MIT License](LICENSE).
