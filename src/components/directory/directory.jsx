import React from 'react';
import './directory.scss';

import MenuItem from '../../components/menu-item/menu-item';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(s => {
          return (
            <MenuItem
              key={s.id}
              title={s.title.toUpperCase()}
              imageUrl={s.imageUrl}
              size={s.size}
              history={this.props.history}
              linkUrl={s.linkUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;