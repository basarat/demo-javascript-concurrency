import { pass, fail } from './promises';

async function main() {
  try {
    const alpha = fail('alpha');
    const beta = pass('beta');
    const charlie = fail('charlie');
    const delta = pass('delta');
    const result = await Promise.race([alpha, beta, charlie, delta]);
    console.log('Passed', result);
  } catch (e: any) {
    console.log('Failed:', e.message);
  }
}

main();