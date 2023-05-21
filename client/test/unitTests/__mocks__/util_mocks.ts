import { Asset } from 'models/Asset';

export const mockURLforDT = 'https://example.com/URL_DT';
export const mockURLforLIB = 'https://example.com/URL_LIB';
export const mockURLforWorkbench = 'https://example.com/URL_WORKBENCH';
export const mockGitLabGroup = 'group';

jest.mock('util/envUtil', () => ({
  useURLforDT: () => mockURLforDT,
  useURLforLIB: () => mockURLforLIB,
  useWorkbenchLinkValues: () => [
    { key: '1', link: 'link1' },
    { key: '2', link: 'link2' },
    { key: '3', link: 'link3' },
  ],
  getGitlabGroup: () => mockGitLabGroup,
}));

export const testPath = '/path';
export const mockAssets: Asset[] = [
  {
    name: 'folderTest1.somethingsdfsdfsdf',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path: `${testPath}/Functions,`,
  },
  {
    name: 'folderTest2.something',
    isDir: true,
    path: `${testPath}/Funct`,
  },
  {
    name: 'folderTest3',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    isDir: true,
    path: `${testPath}/Funct`,
  },
  {
    name: 'folderTest4',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path: `${testPath}/Funct`,
  },
  {
    name: 'folderTest5',
    description: undefined,
    isDir: true,
    path: `${testPath}/Funct`,
  },
  {
    name: 'filetest',
    description:
      'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus',
    isDir: false,
    path: `${testPath}/Funct`,
  },
  {
    name: 'folderTest7',
    description: 'Aenean placerat. In vulputate urna',
    isDir: true,
    path: `${testPath}/Funct`,
  },
];

jest.mock('util/apiUtil', () => ({
  default: () => mockAssets,
}));