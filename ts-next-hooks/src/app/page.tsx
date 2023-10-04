"use client"

import { useFormoose } from 'formoose';
import Image from 'next/image'
import schema from './schema';
import { SyntheticEvent } from 'react';

export default function Home() {
  const t = (s: string) => (s);
  const {
    formData,
    validateAllFieldsSync,
    setProps
  } = useFormoose(schema(), t);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    let formIsValid;

    try {
      formIsValid = await validateAllFieldsSync();
    } catch (error) {
      console.error(error);
    }

    if (formIsValid) {
      alert('We are good to go!');
    } else {
      alert('oops, something went wrong.');
    }
  };

  return(
    <form
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <input type="text" placeholder="* Name" {...setProps('name')} />
        <label htmlFor="name">{t(formData.name.message)} </label>
      </div>

      <div className="field">
        <input
        minLength={4}
          type="number"
          placeholder="Age"
          {...setProps('age')}
        />
        <label htmlFor="age">{t(formData.age.message)} </label>
      </div>

      <div className="field">
        <select {...setProps('gender')}>
          <option>Choose your gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <label htmlFor="gender">{t(formData.gender.message)} </label>
      </div>

      <button type="submit" className="button">SUBMIT</button>
    </form>
  )
}
