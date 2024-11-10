import React, { useState } from 'react';
import axios from 'axios';
import Button from '../uiparts/Button';
import InputForm from '../uiparts/InputForm';


// フォームのデータ構造を定義
interface FormData {
  name: string;
  email: string;
  message: string;
}

const MyForm: React.FC = () => {
  // フォームの状態をuseStateで管理
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // 入力内容を変更する関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 入力内容をリセットする関数
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // フォーム送信処理
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // フォーム送信の処理をここに追加
    const result = await axios.post('http://localhost:8080/test')
    console.log(formData);
    handleReset(); // 送信後にリセット
  };

  return (
    <form >
      <InputForm type='text' label='Name' name='name' value={formData.name} onChange={handleChange}/>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <input
          name="message"
          type='date'
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleReset}>Reset</button>

      <Button text="submit" onClick={handleSubmit} />
    </form>
  );
};

export default MyForm;
