<template>
  <div>
    <nav class="sm:flex justify-end">
      <div
        class="nav-container sm:w-[56.5%] py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 flex justify-between items-center md:items-start"
      >
        <div class="left-nav-container">
          <nuxt-link
            to="/"
            class="left-nav-container flex flex-col justify-center items-center space-y-3"
          >
            <div class="text-beside-logo">
              <h2
                class="uppercase font-inter text-center text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm font-medium leading-relaxed lg:leading-relaxed xl:leading-loose"
              >
                EVM based music artist
              </h2>
            </div>

            <div class="logo">
              <nuxt-img
                src="/images/Code Boy Logo.png"
                alt="Code Boy Sai's Logo"
                sizes="sm:32px md:40px lg:48px xl:64px"
                format="webp"
              />
            </div>
          </nuxt-link>
        </div>

        <div class="right-nav-container md:mt-5 xl:mt-10">
          <nuxt-link to="" class="">
            <button @click="ConnectWallet" id="connectButtonMeta"
              class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              connect
            </button>
          </nuxt-link>

          <!-- "button" used to display wallet address after connected -->
          <button
            class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            id="addressField">
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import lp from "~/abi/CBSaiListeningPass.json";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Contract from "web3-eth-contract";
import Web3 from "web3"

export default {
  methods: {
    async ConnectWallet() {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "" // required
          }
        }
      };
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions // required
      });

      const provider = await web3Modal.connect();

      const web3 = new Web3(provider);

      // global object used to determine if connected on next page
      // definitely a better way to do this (i'm not a web dev...)
      window.web3obj = web3;

      // this address is the one that needs to be displayed
      // problem is, its a different provider object if it uses metamask vs walletconnect
      // maybe check which the user is using?  not sure whats best, but it isn't displaying wallet address for wallet connect
      var account = provider.selectedAddress
      if (!account)
        account = provider.accounts[0]

      // global account object (again used to determine if connected <-- better way to do this)
      window.account = acount
      var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
      document.getElementById("connectButtonMeta").style.display = 'none'
      document.getElementById("addressField").style.display = 'inline'
      document.getElementById("addressField").innerText = accountStr
    }
  },
  mounted: async function() {
    // hide address field button bc we're not connected
    // should check if connected though and display address and hide connect button
    document.getElementById("addressField").style.display = "none"
  }
};
</script>

<style>

</style>
