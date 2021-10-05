import React, { useState } from 'react';
import styles from './signInOrUp.module.scss';
import { AiOutlineUser, AiOutlineSecurityScan } from 'react-icons/ai';
import { BiKey, BiUserPin } from 'react-icons/bi';
import { useAuthPopupStateContext } from './authPopupContextProvider';

type SignUpProps = {

}

const SignUp: React.FC<SignUpProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');

  const { setNeedToSignUp } = useAuthPopupStateContext()

  const handleSignUp = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {

  }
  
  return (
    <div className={styles.container}>

      <div className={styles.form}>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='email'>
            <AiOutlineUser style={{width:'12px', height:'13px'}} color='grey' />
          </label>
          <input
            id='email'
            className={styles.input}
            placeholder='Email'
            type='text'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='username'>
            <BiUserPin style={{width:'12px', height:'13px'}} color='grey' />
          </label>
          <input
            id='username'
            className={styles.input}
            placeholder='Username'
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='password'>
            <BiKey style={{width:'15px', height:'15px'}} color='grey' />
          </label>
          <input
            id='password'
            className={styles.input}
            placeholder='Password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className={styles.flexRow}>
          <label className={styles.label} htmlFor='passwordRep'>
            <AiOutlineSecurityScan style={{width:'15px', height:'15px'}} color='grey' />
          </label>
          <input
            id='passwordRep'
            className={styles.input}
            placeholder='Repeat password'
            type='password'
            value={passwordRepeat}
            onChange={(event) => setPasswordRepeat(event.target.value)}
          />
        </div>
        <input
          className={styles.submit}
          type='submit'
          value='SIGNUP'
          onClick={(event) => handleSignUp(event)}
        />
        <a href='*' onClick={(event) => {
          event.preventDefault();
          setNeedToSignUp(false);
        }}>Sign in</a>
      </div>
    </div>
  )
}

export default SignUp
