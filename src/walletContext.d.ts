// walletContext.d.ts

import { ReactNode } from 'react';

interface WalletContextType {
  walletIsSigned: boolean;
  setWalletIsSigned: (value: boolean) => void;
  message: string;
  setMessage: (value: string) => void;
  signature: string;
  setSignature: (value: string) => void;
  walletConnected: boolean;
  setWalletConnected: (value: boolean) => void;
  onSignMessage: boolean;
  setOnSignMessage: (value: boolean) => void;
  showConnectedWallets: boolean;
  setShowConnectedWallets: (value: boolean) => void;
  currentlyConnectedWallet: any; // Adjust type as needed
  setCurrentlyConnectedWallet: (value: any) => void; // Adjust type as needed
  walletVerified: any; // Adjust type as needed
  setWalletVerified: (value: any) => void; // Adjust type as needed
  walletDataSaved: any; // Adjust type as needed
  setWalletDataSaved: (value: any) => void; // Adjust type as needed
  ensList: any[]; // Adjust type as needed
  setEnsList: (value: any[]) => void; // Adjust type as needed
  publicEnsList: any[]; // Adjust type as needed
  setPublicEnsList: (value: any[]) => void; // Adjust type as needed
  privateEnsList: any[]; // Adjust type as needed
  setPrivateEnsList: (value: any[]) => void; // Adjust type as needed
  isDisplayEnsNames: boolean;
  setIsDisplayEnsNames: (value: boolean) => void;
  ensVisibiltyUpdated: boolean;
  setEnsVisibiltyUpdated: (value: boolean) => void;
  verifiedWalletsList: any[]; // Adjust type as needed
  setVerifiedWalletsList: (value: any[]) => void; // Adjust type as needed
  messageSigned: boolean;
  setMessageSigned: (value: boolean) => void;
  resetAll: () => void;
  walletsMap: Map<any, any>; // Adjust type as needed
  setWalletsMap: (value: Map<any, any>) => void; // Adjust type as needed
}

export const useWallet: () => WalletContextType;

export const WalletProvider: React.FC<{ children: ReactNode }>;
