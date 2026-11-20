import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as api from '@api/contact'

export const useContactStore = defineStore('contactStore', () => {
  const contactList = ref({ pageno: 0, pagesize: 0, totalcount: 0, contacts: [] });
  const contact = ref({ no: 1, name: '', tel: '', address: '', photo: '' });
  const loading = ref(false);
  const errMessage = ref('');

  const getContactList = (no, size) => {
    loading.value = true;
    errMessage.value = '';
    api.getContactList(no, size)
      .then((resp) => contactList.value = resp.data)
      .catch((err) => {
        console.error(err);
        errMessage.value = '데이터를 불러오는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
      })
      .finally(() => loading.value = false)
  };

  const getContact = async (no) => {
    loading.value = true;
    errMessage.value = '';

    api.getContact(no)
      .then((resp) => contact.value = resp.data)
      .catch((err) => {
        console.error(err);
        errMessage.value = '데이터를 불러오는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
      })
      .finally(() => loading.value = false)
  };

  const deleteContact = async (no) => {
    loading.value = true;
    errMessage.value = '';

    try {
      const resp = await api.deleteContact(no);
      return resp.data;
    } catch (err) {
      console.error(err);
      errMessage.value = '데이터를 삭제하는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
    } finally {
      loading.value = false
    }
  };

  const updateContact = async (data) => {
    loading.value = true;
    errMessage.value = '';

    // console.log(data)

    try {
      const resp = await api.updateContact(data);
      return resp.data;
    } catch (err) {
      console.error(err);
      errMessage.value = '데이터를 수정하는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
    } finally {
      loading.value = false
    }
  };

  const addContact = async (data) => {
    loading.value = true;
    errMessage.value = '';

    try {
      const resp = await api.addContact(data);
      return resp.data;
    } catch (err) {
      console.error(err);
      errMessage.value = '데이터를 입력하는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
    } finally {
      loading.value = false
    }
  };

  const updatePhoto = async (no, file) => {
    loading.value = true;
    errMessage.value = '';

    try {
      const resp = await api.updatePhoto(no, file);
      return resp.data;
    } catch (err) {
      console.error(err);
      errMessage.value = '이미지를 수정하는 중 에러가 발생했습니다. 잠시 후 다시 시도해 주세요';
    } finally {
      loading.value = false
    }
  };

  const changeContact = (evt) => {
    // evt.target.name => name, tel, address
    // evt.target.value => 각 필드에서 입력한 값

    // 제약조건
    contact.value[evt.target.name] = evt.target.value;
  };
  const clearContact = () => {
    // getContact를 선택하고 Add를 선택하면 기존 데이터가 대입되어 있는 것을 비울 목적
    contact.value = { no: 1, name: '', tel: '', address: '', photo: '' };
  }

  return {
    contact, contactList, loading, errMessage,
    getContactList, getContact, addContact, updateContact, deleteContact, updatePhoto, changeContact, clearContact
  };
});