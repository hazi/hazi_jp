import React from "react";
import format from "date-fns/format";

export default class PhotosPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let thumbnail = getAsset(entry.getIn(["data", "thumbnail"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3">{ entry.getIn(["data", "title"])}</h1>
      <div className="cms mw6">
        { thumbnail && <img src={ thumbnail } alt={ entry.getIn(["data", "title"])} /> }
      </div>
    </div>;
  }
}
