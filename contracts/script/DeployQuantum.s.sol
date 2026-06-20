// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "forge-std/Script.sol";
import "../src/QuantumFactory.sol";
import "../src/QuantumRouter.sol";
import "../src/QuantumToken.sol";

contract DeployQuantum is Script {
    function run() external {
        uint256 deployerKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerKey);

        console.log("Deploying from:", deployer);
        console.log("Chain ID:", block.chainid);

        vm.startBroadcast(deployerKey);

        // 1. Deploy Factory
        QuantumFactory factory = new QuantumFactory();
        console.log("Factory deployed at:", address(factory));

        // 2. Deploy Router (factory + fee token)
        QuantumRouter router = new QuantumRouter(address(factory));
        console.log("Router deployed at:", address(router));

        // 3. Deploy test tokens (mint 1M each to deployer)
        QuantumToken usdc = new QuantumToken("USD Coin", "USDC", 1_000_000e6, 6);
        console.log("USDC deployed at:", address(usdc));

        QuantumToken eurc = new QuantumToken("Euro Coin", "EURC", 1_000_000e6, 6);
        console.log("EURC deployed at:", address(eurc));

        vm.stopBroadcast();

        console.log("\n=== DEPLOYMENT SUMMARY ===");
        console.log("Factory: ", address(factory));
        console.log("Router:  ", address(router));
        console.log("USDC:    ", address(usdc));
        console.log("EURC:    ", address(eurc));
        console.log("Deployer:", deployer);
    }
}
