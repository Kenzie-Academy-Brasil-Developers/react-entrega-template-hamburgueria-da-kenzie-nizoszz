import { InputSearchStiled } from "./style";

export const InputSearch = ({ formValue, setFormValue }) => {
  return (
    <InputSearchStiled
      type="text"
      name="name"
      placeholder="Digitar pesquisa"
      onChange={(event) =>
        setFormValue({ ...formValue, category: event.target.value })
      }
    />
  );
};
