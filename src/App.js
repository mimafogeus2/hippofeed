import React, { Component } from 'react';

import DigestIndex from './components/DigestIndex.js';
import DigestItem from './components/DigestItem.js';

import './App.css';

const ITEMS_FULL = [
  {content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium at tellus eget tincidunt. Proin vel elementum est, sit amet semper diam. Pellentesque vitae erat libero. Morbi mattis facilisis maximus. Aliquam nisl nibh, maximus et nunc eu, vulputate porttitor dui. Mauris rhoncus elit nisl, sed pharetra nulla iaculis iaculis. Mauris rhoncus congue posuere. Vivamus vitae est egestas, mattis ligula in, hendrerit risus. Nulla convallis, ipsum sed hendrerit porttitor, risus sapien vulputate quam, nec cursus libero felis sit amet tellus. Ut sem neque, faucibus vitae facilisis nec, egestas vel purus. In sed ante vel nulla congue dictum. Nullam pulvinar quam dui, et dignissim urna efficitur ac. Pellentesque tempor pretium lacus, ac cursus leo. Proin ante erat, blandit eu euismod non, viverra eu magna.', imageURI: ' //s-media-cache-ak0.pinimg.com/736x/92/9d/3d/929d3d9f76f406b5ac6020323d2d32dc.jpg', title: 'I am an article', type: 'article'},
  {content: 'Cras a malesuada sapien, et rutrum nisi. Nulla quis nisl at elit ornare maximus vitae vel lacus. Sed cursus finibus dui, nec vestibulum magna consequat eget. Phasellus sed sem ut lorem pretium sollicitudin. Suspendisse consectetur scelerisque justo, eu ullamcorper ligula scelerisque a. Proin auctor turpis nec risus rutrum volutpat. Mauris sodales, ante nec mattis interdum, nibh velit bibendum dolor, et mollis tortor neque vel sapien. Sed sem nisl, dapibus eget enim sed, pulvinar pulvinar sapien. Mauris nec lobortis felis. Quisque lobortis ut metus ac egestas. Aenean tristique nulla nec lacus placerat tempus. Nulla vitae aliquet nisl. Praesent placerat urna non elit sagittis, a rutrum lectus aliquam. Vestibulum sed nisi augue. Proin sed consequat nisi. Proin placerat, neque eget volutpat efficitur, neque tortor rutrum ipsum, vel pretium lorem velit non nisl.', title: 'I am a discussion', type: 'discussion'},
  {content: 'In hac habitasse platea dictumst. Etiam quis lorem magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin elementum efficitur mauris nec maximus. Proin eu molestie enim. Proin massa urna, ornare et ligula sed, ultricies suscipit mauris. Nam tincidunt, urna quis fringilla aliquam, libero lectus imperdiet tortor, nec volutpat purus mi id risus. Vivamus posuere tellus suscipit tellus blandit, sagittis tincidunt magna sodales. Nulla luctus elementum elit, ut sollicitudin nunc commodo sed. Aenean vitae vulputate est. Donec ut mi eu augue convallis ornare non in risus. Nulla quis lacus id ex ultricies molestie. Pellentesque luctus semper arcu quis pulvinar. Cras commodo enim sed leo posuere finibus. Sed ligula dui, dapibus nec lectus ut, tempor aliquam lectus. Phasellus enim velit, molestie nec tortor ac, luctus pellentesque augue.\n\nMaecenas euismod ac nibh eu eleifend. Ut ac consectetur felis. Proin eget lectus est. Ut commodo velit non turpis ultricies finibus. Sed tortor lectus, vulputate at est nec, lacinia pellentesque risus. Donec a ultrices sapien. Fusce nec justo eget ex varius facilisis at in lorem. Mauris venenatis, enim ac fringilla sodales, magna erat imperdiet libero, ac porta mi nunc eu est. Nullam at porta enim. Fusce sed purus lacinia libero ultricies rhoncus et ut turpis. Phasellus vestibulum luctus risus, at dapibus nibh sagittis vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla nec magna at risus suscipit blandit nec efficitur tortor. Nunc sed tincidunt orci.', title: 'I am a message', type: 'message'},
];

class App extends Component {
  getDigestItems() {
    return ITEMS_FULL.map((item) => <DigestItem {...item} />);
  }

  render() {
    return (
      <div className="App">
        <DigestIndex />
        {this.getDigestItems()}
      </div>
    );
  }
}

export default App;
