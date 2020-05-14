import * as Yup from 'yup';

const createArticleSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
  tags: Yup.string(),
});
export default createArticleSchema;
