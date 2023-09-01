import React, { useState } from 'react';
import { Formoose, handleFieldChange, validateOneField, validateAllFieldsSync, mountFormData } from 'formoose';
import { withTranslation } from 'react-i18next';

import schema from './schema';

function FormooseForm({ t }) {

  const formoose = new Formoose(schema, t);
  const [formData, stateSetter] = useState(mountFormData(schema()));
  formoose.formData = formData;
  formoose.stateSetter = stateSetter;

  const handleSubmit = async e => {
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
      <input
        id="name"
        type="text"
        value={formData.name.value}
        onChange={e => handleFieldChange(e, 'name')}
        onFocus={e => handleFieldChange(e, 'name')}
        onBlur={() => validateOneField('name')}
      />
      <div>
        <label htmlFor="name">{t(formData.name.message)} </label>
      </div>
      <input type="submit" value="Validate!"/>
    </form>
  );

}

export default withTranslation()(FormooseForm);
