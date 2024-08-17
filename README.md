<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Peer-to-Peer Lending Platform</h3>
  <p align="center">
    A decentralized application (dapp) for requesting and providing loans, powered by Cartesi rollups technology.
  </p>
</div>

## About

<p>
    This Peer-to-Peer Lending Platform allows users to request loans and provide loans in a decentralized manner. 
    The platform automates loan agreements and repayments while tracking and displaying loan statuses.
</p>

## Getting Started

Below you'll find instructions

 to get a local copy up and running.

### Prerequisites

- Node.js 20 or above
- Cartesi CLI
- Docker with WSL2 backend (for Windows users)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/ekeesther234/anonymous-lend-dapp.git 
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Start the application

   ```sh
   npm start
   ```

## Usage

The primary functionality of the platform is exposed through the following controller functions:

- `createLoanRequest`: Create a new loan request.
- `getAllLoanRequests`: Retrieve all loan requests.
- `getLoanRequestById`: Retrieve a specific loan request by its ID.
- `provideLoan`: Provide a loan to a specific loan request.
- `getLoanById`: Retrieve a specific loan by its ID.

## Directory Structure

- `index.js`: Entry point for the application.
- `controllers/loan-request.js`: Controller for handling loan requests.
- `controllers/loan-provider.js`: Controller for handling loan providers.
- `models/loan-request.js`: Model representing a loan request.
- `models/loan-provider.js`: Model representing a loan provider.
- `storage/loan.js`: Storage class for managing loan requests and providers.

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add some YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Victor Ifeanyi Chukwujiobi - [LinkedIn](https://linkedin.com/in/yourusername) - [GitHub](https://github.com/yourusername)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
