import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  CardLayout, Card, PageActivityOverlay,
} from '@cerner/terra-application/lib/page';

import PendingActionsCard from './content/PendingActionsCard';
import NotificationBannersCard from './content/NotificationBannersCard';
import ErrorHandlingCard from './content/ErrorHandlingCard';
import InteractionBlockingOverlayCard from './content/InteractionBlockingOverlayCard';
import LoadingOverlayCard from './content/LoadingOverlayCard';
import NotificationDialogCard from './content/NotificationDialogCard';
import NavigationItemCard from './content/NavigationItemCard';
import ApplicationInfoCard from './content/ApplicationInfoCard';

const propTypes = {
  label: PropTypes.string,
  pageKey: PropTypes.string,
  onRequestClose: PropTypes.func,
};

const ChartReview = ({ label, pageKey, onRequestClose }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Page
      pageKey={pageKey}
      label={label}
      onRequestClose={onRequestClose}
      activityOverlay={isLoading ? <PageActivityOverlay variant="loading" /> : undefined}
    >
      <CardLayout>
        <Card label={`${label} Details`}>
          <p>Page 1 demonstrates the following features:</p>
          <ul>
            <li>Page header action that presents a modal workflow</li>
            <li>Content that triggers Page APIs</li>
          </ul>
        </Card>
        <ApplicationInfoCard />
        <NavigationItemCard />
        <PendingActionsCard />
        <NotificationBannersCard />
        <NotificationDialogCard />
        <LoadingOverlayCard onSetLoading={setIsLoading} />
        <ErrorHandlingCard pageTitle={label} />
        <InteractionBlockingOverlayCard />
      </CardLayout>
    </Page>
  );
};

ChartReview.propTypes = propTypes;

export default ChartReview;
