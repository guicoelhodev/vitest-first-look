import React, { useId, useRef, useState } from "react";
import S from "./style.module.scss";

interface INameList {
  name: string;
  id: string;
}

export const ListName: React.FC = () => {
  const [nameList, setNameList] = useState<null | INameList[]>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const id = useId();
  const addNewName = (name: string) => {
    let tmpName = {
      name: name,
      id: `${name}_${id}`,
    };

    if (nameList) {
      setNameList((prev) => [...prev!, tmpName]);
    } else setNameList([tmpName]);

    nameRef.current!.value = "";
  };

  const handleAddUser = (name: string) => {
    if (name.length > 0) return addNewName(name);
    return alert("Cannot add empty name");
  };

  return (
    <div className={S.container}>
      <ul role="listName">
        {nameList ? (
          nameList.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <aside className={S.emptyList}>
            Lista se encontra vazia, adicione novos nomes!
          </aside>
        )}
      </ul>

      <section>
        <article className={S.inputContainer}>
          <label htmlFor="input-name">Adicionar um nome</label>
          <input
            placeholder="Ex Guilherme Coelho"
            id="input-name"
            ref={nameRef}
          />
        </article>
        <button
          className={S.btnAdd}
          onClick={() => handleAddUser(nameRef.current!.value)}
        >
          Adicionar
        </button>
      </section>
    </div>
  );
};
