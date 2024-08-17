Here's the revised README for the Peer-to-Peer Lending Platform, customized for Justin Anakor:

---

<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Peer-to-Peer Lending Platform</h3>
  <p align="center">
    A decentralized application (dApp) for requesting and providing loans, powered by Cartesi Rollups technology.
  </p>
</div>

## About

<p>
    The Peer-to-Peer Lending Platform is a decentralized solution that allows users to request loans and provide loans in a secure and automated manner. The platform handles loan agreements and repayments, ensuring transparency and efficiency while tracking and displaying loan statuses.
</p>

## Getting Started

Below are the instructions to get a local copy up and running.

### Prerequisites

- **Node.js 20 or above** - JavaScript runtime for building and running the dApp.
- **Cartesi CLI** - Command-line tool for managing Cartesi Rollups.
- **Docker with WSL2 backend (for Windows users)** - Required for containerization and running the dApp in a compatible environment.

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/just-debug-arch/Peer-to-Peer-Lending-Platform
   ```

2. **Install NPM Packages**
   Navigate to the project directory and install the necessary dependencies:
   ```sh
   npm install
   ```

3. **Start the Application**
   Run the application using the following command:
   ```sh
   npm start
   ```

## Usage

The primary functionalities of the platform are managed through the following controller functions:

- `createLoanRequest`: Allows users to create a new loan request.
- `getAllLoanRequests`: Retrieves a list of all loan requests.
- `getLoanRequestById`: Fetches details of a specific loan request by its ID.
- `provideLoan`: Enables a user to provide a loan to a specific request.
- `getLoanById`: Retrieves details of a specific loan by its ID.

## Directory Structure

- **`index.js`**: The main entry point for the application.
- **`controllers/loan-request.js`**: Manages loan request operations.
- **`controllers/loan-provider.js`**: Manages loan provision operations.
- **`models/loan-request.js`**: Represents the structure of a loan request.
- **`models/loan-provider.js`**: Represents the structure of a loan provider.
- **`storage/loan.js`**: Handles the storage and management of loan requests and providers.

## Contributing

Contributions are welcome and appreciated. To contribute, follow these steps:

1. **Fork the Project**
2. **Create Your Feature Branch**: (`git checkout -b feature/YourFeature`)
3. **Commit Your Changes**: (`git commit -m 'Add some YourFeature'`)
4. **Push to the Branch**: (`git push origin feature/YourFeature`)
5. **Open a Pull Request**

## License

This project is distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Justin Anakor - [justinanakor@gmail.com](mailto:justinanakor@gmail.com) - [GitHub](https://github.com/just-debug-arch)

<p align="right">(<a href="#readme-top">back to top</a>)</p>