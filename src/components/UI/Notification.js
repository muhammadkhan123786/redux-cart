import classes from './Notification.module.css';

const Notification = (props) => {
  let cssClasses = '';
  if (props.status === 'error') {
    cssClasses = classes.error;
  }
  if (props.status === 'success') {
    cssClasses = classes.success;
  }
  const applyClasses = `${classes.Notification} ${cssClasses}`;
  return (
    <section className={applyClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
