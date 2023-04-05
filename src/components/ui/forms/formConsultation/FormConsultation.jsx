import React from 'react';
import './FormConsultation.scss';
import { useForm } from 'react-hook-form';
import padlock from '../../../../icons/padlock.svg';
import present1 from '../../../../icons/present1.svg';
import present2 from '../../../../icons/present2.svg';
import { formConsultationData } from './FormConsultationData';
import { selectOptions } from './FormConsultationData';

export const FormConsultation = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      { formConsultationData.map(data => 
        <div className='formconsult__wrapper' key={data.id}>
          <div className='formconsult__text'>
            <h1 className='formconsult__text-title'>
             {data.mainTitle}
            </h1>
            <p className='formconsult__text-description'>
              {data.mainDescription}
            </p>
          </div>
          <div className='formconsult__form-wrapper'>
            <div className='formconsult__form-text'>
              <h2 className='formconsult__form-text-title'>
                {data.formTitle}
              </h2>
              <p className='formconsult__form-text-description'>
                {data.formDescription}
              </p>
            </div>
            <form className='formconsult__form-inner' onSubmit={handleSubmit(onSubmit)}>
              <div className='formconsult__form-inner-item'>
                <div className='formconsult__input-wrapper'>
                  <input className='formconsult__input' placeholder='Ваше имя' defaultValue='' {...register('Name', { required: 'This field is required' })} />
                  <div className='formconsult__input-error-wrapper'>
                    {errors.Name && <span className='formconsult__input-error'>{errors.Name.message}</span>}
                  </div>
                </div>
                <div className='formconsult__input-wrapper'>
                  <input className='formconsult__input' type='tel' placeholder='Номер телефона' defaultValue='' {...register('Phone', { required: 'This field is required' })} />
                  <div className='formconsult__input-error-wrapper'>
                    {errors.Phone && <span className='formconsult__input-error'>{errors.Phone.message}</span>}
                  </div>
                </div>
                <div className='formconsult__exinfo'></div>
              </div>
              <div className='formconsult__form-inner-item'>
                <div className='formconsult__input-wrapper'>
                  <select 
                    className='formconsult__input' 
                    {...register("services", 
                      { required: 'This field is required' 
                    })} 
                  >
                    { selectOptions.map(option => 
                      <option value={option.value} key={option.id} >{option.text}</option>
                      )
                    }
                  </select>
                  <div className='formconsult__input-error-wrapper'>
                    {errors.services && <span className='formconsult__input-error'>{errors.services.message}</span>}
                  </div>
                </div>
                <div className='formconsult__input-wrapper'>
                  <input className='formconsult__button' type="submit" />
                </div>
                <div className='formconsult__exinfo'>
                  <div className='formconsult__exinfo-icon'>
                    <img className='formconsult__exinfo-img' src={padlock} alt='padlock' />
                  </div>
                  <p className='formconsult__exinfo-text'>
                    {data.confedence}
                  </p>
                </div>
              </div>
              <img className='formconsult__present1' src={present1} alt='present1' />
              <img className='formconsult__present2' src={present2} alt='present2' />
            </form>
          </div>
        </div>
      )
    }
  </>
  )
}
