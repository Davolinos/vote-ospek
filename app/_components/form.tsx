'use client';
import { useState } from "react";


export default function Form({func}: {func: any}) {
    const [nama, setNama] = useState<string>("")
    const [nisn, setNisn] = useState<number>(0)
    const [pilihan, setPilihan] = useState<number>(0)

    function handleChangeNama(e: React.ChangeEvent<HTMLInputElement>) {
        setNama(e.target.value);
    }

    function handleChangeNisn(e: React.ChangeEvent<HTMLInputElement>) {
        setNisn(parseInt(e.target.value));
    }


    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPilihan(parseInt(event.target.value));
    };

  return (
    <div>
      <label className="block">
        Nama: 
        <input type="text" onChange={handleChangeNama}/>
      </label>
      <label className="block">
        NISN: 
        <input type="text" onChange={handleChangeNisn}/>
      </label>
      <p>
        Pilhan
        <label>
          <input 
          type="radio" 
          name="pilih" 
          value="1" 
          onChange={handleOptionChange} />
          Kandidat 1
        </label>
        <label>
          <input
            type="radio"
            name="pilih"
            value="2"
            onChange={handleOptionChange}
          />
          Kandidat 2
        </label>
        <label>
          <input 
          type="radio" 
          name="pilih" 
          value="3"
          onChange={handleOptionChange} />
          Kandidat 3
        </label>
      </p>
      <button className="bg-red" onClick={() => func(nisn, nama, pilihan)}>
        click dis i dare u
      </button>
    </div>
  );
}