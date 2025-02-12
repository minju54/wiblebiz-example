/**
 * 서버일 때는 server를 클라이언트일때는 worker를 실행
 */
export async function initMsw() {
  if (
    typeof window === 'undefined' &&
    process.env.NEXT_RUNTIME === 'nodejs' &&
    process.env.NODE_ENV !== 'production'
  ) {
    const { server } = await import('../mocks/server');
    server.listen();
  } else {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
}
