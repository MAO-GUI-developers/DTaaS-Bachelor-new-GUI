import * as React from 'react';
import { Grid } from '@mui/material';
import AssetCard, { CardData } from './AssetCard';

interface AssetBoardProps {
  data: CardData[];
}

const outerGridContainerProps = {
  container: true,
  spacing: 2,
  sx: {
    justifyContent: 'flex-start',
    overflow: 'auto',
    maxHeight: 'inherent',
  },
};

function AssetBoard(props: AssetBoardProps) {
  const { data } = props;
  return (
    <Grid {...outerGridContainerProps}>
      {data.map((cardData) => (
        <Grid
          key={cardData.index}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{ minWidth: 250 }}
        >
          <AssetCard data={cardData} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AssetBoard;