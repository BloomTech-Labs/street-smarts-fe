import { Modal } from 'antd';

export function singleCarSubmitError() {
  let secondsToGo = 6;
  const modal = Modal.success({
    title: 'Please fill out the entire form before submitting!',
    content: `This message will close after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This message will close after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};