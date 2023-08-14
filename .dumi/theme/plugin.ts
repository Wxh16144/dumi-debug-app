import { IApi } from 'dumi';

export default (api: IApi) => {
  api.describe({
    key: 'changeFavicon',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
    enableBy: api.EnableBy.config
  });
  api.modifyConfig((memo)=>{
    memo.favicons = api.userConfig.changeFavicon;
    return memo;
  });
};
