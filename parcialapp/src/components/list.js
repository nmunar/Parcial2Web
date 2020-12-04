import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "./list.css";

import { FormattedMessage } from "react-intl";

function List(props) {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <FormattedMessage id="Image" />
            </th>
            <th>
              <FormattedMessage id="Name" />
            </th>
            <th>
              <FormattedMessage id="Description" />
            </th>
            <th>
              <FormattedMessage id="Height" />
            </th>
            <th>
              <FormattedMessage id="Weight" />
            </th>
            <th>
              <FormattedMessage id="Type" />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.objs.map((obj) => {
            return (
              <tr className="rows">
                <td>{obj.id}</td>
                <td>
                  <img
                    alt="pokemon"
                    src={obj.ThumbnailImage}
                    height="50"
                    width="50"
                  />
                </td>
                <td>{obj.name}</td>
                <td>{obj.description}</td>
                <td>{obj.weight}</td>
                <td>{obj.height}</td>
                <td>
                  {obj.type.map((tipo) => {
                    return (
                      <h6>
                        <span class="badge badge-secondary">{tipo}</span>
                      </h6>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default List;
