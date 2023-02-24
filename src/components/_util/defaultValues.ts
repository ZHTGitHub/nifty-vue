import type { GroupConfig, LabelConfig } from './type'

interface DefaultValues {
  groupConfig: GroupConfig;
  labelConfig: {
    horizontal: LabelConfig;
    vertical: LabelConfig;
  }
}

const defaultValues: DefaultValues = {
  groupConfig: {
    direction: 'horizontal'
  },

  labelConfig: {
    horizontal: {
      align: 'right'
    },

    vertical: {
      align: 'left'
    }
  }
}

export default defaultValues