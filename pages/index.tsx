import { ConnectWallet, useAddress, useContract, useContractRead, Web3Button} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address= useAddress();
  const contractAddress= "0x40F8aF704563F871bf7d74a7fc442EEBb1b36b0a" ;
  const {contract} = useContract(contractAddress);
  const { data: proposal, isLoading: proposalLoading} = useContractRead(contract,"proposal", 0);
  const { data: hasvoted, isLoading: hasVotedLoading} = useContractRead(contract, "hasVoted", 0, address);
    return ( 
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
<ConnectWallet />
<h1>Voting DApplication</h1>
<div>
  {address ? (
    <div>
      {proposalLoading ? (
        <div>
    <p>Loading Proposal... </p>
    </div>
  ):(
    <div>
        <h2>{proposal[0]}</h2>
        <div>
          <Web3Button 
          contractAddress={contractAddress}
          action={(contract) => contract.call("vote", 0, true)}
          >Yes</Web3Button>
          <br/>
          <Web3Button
          contractAddress={contractAddress}
          action={(contract) => contract.call("vote", 0, false)}
          >No</Web3Button>

        </div>
    </div>
  )}
  </div>
  ) : (
    <div>
      <p>Connect your wallet to get started</p>
      </div>
  )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
