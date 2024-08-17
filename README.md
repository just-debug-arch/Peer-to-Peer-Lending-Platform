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

To get a local copy up and running, follow the instructions below.

### Prerequisites

- **Node.js 20 or above** - Required for building and running the dApp.
- **Cartesi CLI** - Command-line tool for managing Cartesi Rollups.
- **Docker with WSL2 backend (for Windows users)** - Required for containerization and running the dApp in a compatible environment.
- **Cartesi Rollups Environment** - Ensure that you have the Cartesi Rollups environment set up, including a local blockchain node and Rollups server.

### Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/just-debug-arch/Peer-to-Peer-Lending-Platform.git
   ```

2. **Install NPM Packages**
   Navigate to the project directory and install the necessary dependencies:
   ```sh
   npm install
   ```

3. **Set Up the Cartesi Rollups Environment**
   - Follow the [Cartesi Rollups Quickstart Guide](https://cartesi.io/docs/quickstart) to set up the required local environment.
   - Ensure your local blockchain node and Rollups server are running.

4. **Build the Application**
   Build the Cartesi Rollups dApp using the Cartesi CLI:
   ```sh
   cartesi build
   ```

5. **Run the Application**
   Start the Cartesi Rollups dApp using the following command:
   ```sh
   cartesi run
   ```

### Running the dApp

To interact with the Peer-to-Peer Lending Platform, you can use the provided controller functions within the application:

- `createLoanRequest`: Create a new loan request on the platform.
- `getAllLoanRequests`: Retrieve all existing loan requests.
- `getLoanRequestById`: Fetch details of a specific loan request by its ID.
- `provideLoan`: Provide a loan to a specific request.
- `getLoanById`: Retrieve details of a specific loan by its ID.

## Directory Structure

- **`index.js`**: The main entry point for the application.
- **`controllers/loan-request.js`**: Manages loan request operations.
- **`controllers/loan-provider.js`**: Manages loan provision operations.
- **`models/loan-request.js`**: Represents the structure of a loan request.
- **`models/loan-provider.js`**: Represents the structure of a loan provider.
- **`storage/loan.js`**: Handles the storage and management of loan requests and providers.

## Contributing

Contributions are welcome! To contribute:

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

---

This README now includes the essential `cartesi build` and `cartesi run` commands for setting up and running the dApp using the Cartesi CLI.