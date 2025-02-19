import { archivedVersionsLink } from '../config';

export default function (versions) {
  const hasArchivedVersions = versions.some(version => version.archived);
  const newVersions = versions.filter(version => !version.archived);
  return hasArchivedVersions
    ? newVersions.concat(archivedVersionsLink)
    : newVersions;
}
