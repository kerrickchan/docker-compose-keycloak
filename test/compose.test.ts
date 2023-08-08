import { v2 as compose } from 'docker-compose';
import { logOutput, isContainerRunning } from '@kerrickdev/docker-util';

describe('when upAll is called', () => {
  it('should successful run', async () => {
    await compose.upAll({ cwd: __dirname, log: logOutput })
    expect(await isContainerRunning('/keycloak-keycloak-postgres-1')).toBeTruthy()
    expect(await isContainerRunning('/keycloak-keycloak-1')).toBeTruthy()
    await compose.down({ cwd: __dirname, log: logOutput })
  }, 30000);
});
