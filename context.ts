import { createContext } from "react";

interface AppContextTypes {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const defaultContext: AppContextTypes = {
  modalVisible: false,
  setModalVisible: () => {},
  selected: "yes",
  setSelected: () => {},
};

export const AppContext = createContext<AppContextTypes>(defaultContext);
