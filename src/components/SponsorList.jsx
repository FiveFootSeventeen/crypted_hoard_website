import React from 'react';

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

function RenderRow(props) {
  //const { index } = props;

  return (
    <List class="rpgui-content" sx={{ width: '100%', marginTop: '1em'}}>
      <ListItem class="rpgui-container framed-golden" alignItems="flex-start">
          some stuff
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
                Ali Connors — I'll be in your neighborhood doing errands this…
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default function SponsorList() {
  var poolList = []

  for(var i = 0; i < 100; i++)
  {
    poolList.push({"index": i})
  }

  return (
    <React.Fragment>
      {poolList.map(pool => <RenderRow key={pool.index} index={pool.index} />)}
    </React.Fragment>
  );
}

