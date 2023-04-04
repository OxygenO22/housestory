import React from 'react';
import './FormRecall.scss';
import { useForm } from 'react-hook-form';
import helmet from '../../../../icons/helmet.svg';

export const FormRecall = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  });
  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <div className='formrecall__wrapper'>
      <div className='formrecall__form-wrapper'>
        <div className='formrecall__form-text'>
          <h2 className='formrecall__form-text-title'>
            Хотите с нами сотрудничать?
          </h2>
          <p className='formrecall__form-text-description'>
            Заполните форму и мы перезвоним вам в течение 30 минут!
          </p>
        </div>
        <form className='formrecall__form-inner' onSubmit={handleSubmit(onSubmit)}>
            <div className='formrecall__input-wrapper'>
              <input className='formrecall__input' placeholder='Ваше имя' defaultValue='' {...register('Name', { required: 'This field is required' })} />
              <div className='formrecall__input-error-wrapper'>
                {errors.Name && <span className='formconsult__input-error'>{errors.Name.message}</span>}
              </div>
            </div>
            <div className='formrecall__input-wrapper'>
              <input className='formrecall__input' type='tel' placeholder='Номер телефона' defaultValue='' {...register('Phone', { required: 'This field is required' })} />
              <div className='formrecall__input-error-wrapper'>
                {errors.Phone && <span className='formconsult__input-error'>{errors.Phone.message}</span>}
              </div>
            </div>
            <div className='formrecall__input-wrapper'>
              <textarea 
                className='formrecall__input formrecall__textarea'
                placeholder='Ваше сообщение (необязательно)' 
                rows='3'
                {...register("description", 
                  { required: 'This field is required' 
                })} 
              />
              <div className='formrecall__input-error-wrapper'>
                {errors.description && <span className='formconsult__input-error'>{errors.description.message}</span>}
              </div>
            </div>
            <div className='formrecall__input-wrapper'>
              <div className='formrecall__button-wrapper'>
                <input className='formrecall__button' type="submit" />
              </div>
            </div>
          <img className='formrecall__helmet' src={helmet} alt='helmet' />
        </form>
      </div>
    </div>
  )
}
