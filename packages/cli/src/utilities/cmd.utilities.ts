export function getShellForPlatform() {
  return isWin ? 'powershell.exe' : true;
}

export const isWin = process.platform === 'win32';
