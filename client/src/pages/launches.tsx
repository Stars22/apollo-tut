import React, { Fragment }  from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {Button, Loading, Header, LaunchTile} from '../components';
import { RouteComponentProps } from '@reach/router';
import * as GetLaunchListTypes from './__generated__/GetLaunchList';

const GET_LAUNCHES = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;

interface LaunchesProps extends RouteComponentProps {}

const Launches: React.FC<LaunchesProps> = () => {
  return <Fragment>
    <Header />
  </Fragment>;
}

export default Launches;

