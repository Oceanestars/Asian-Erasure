import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    height:320,
    width:250
  },
  media: {
    borderRadius: 6,
  
  },
  image: {
    position:'relative',
    top:'200px',
  }

}));

export const PersonCards = React.memo(function PersonCards(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <a href={props.data.Links} target="_blank" rel="noreferrer" >
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={props.data.Image}
        alt={props.data.FirstName + ' ' +  props.data.LastName + ' photo' }
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={props.data.Role}
          heading={props.data.FirstName + ' ' +  props.data.LastName }
          body={props.data.Culturalconnections}
        />
      </CardContent>
    </Card>
    </a>
  );
});
export default PersonCards