import { DeployFunction } from 'hardhat-deploy/types';
import { parseEther } from 'ethers/lib/utils';
import { HardhatRuntimeEnvironmentExtended } from 'helpers/types/hardhat-type-extensions';
import { ethers } from 'hardhat';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironmentExtended) => {
  const { getNamedAccounts, deployments } = hre as any;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy('YourToken', {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: ["Hello"],
    log: true,
  });

  const yourToken = await ethers.getContract('YourToken', deployer);

  // Todo: transfer tokens to frontend address
  // const result = await yourToken.transfer("0x0265cC852A37F866675a76FD0137EB6a08ECb336", ethers.utils.parseEther("1000") );

  // ToDo: To take ownership of yourContract using the ownable library uncomment next line and add the
  // address you want to be the owner.
  // yourToken.transferOwnership("0x0265cC852A37F866675a76FD0137EB6a08ECb336");
};
export default func;
func.tags = ['YourToken'];
