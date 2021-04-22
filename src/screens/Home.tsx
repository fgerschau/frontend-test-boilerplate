import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: 'center',
  },
}));

const Home = () => {
  const styles = useStyles();

  return (
    <Typography
      variant="h3"
      component="h1"
      gutterBottom
      className={styles.header}
    >
      Welcome! 🐱
    </Typography>
  );
};

export default Home;
