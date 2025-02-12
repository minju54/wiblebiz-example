/**
 * 서버일 때는 server를 클라이언트일때는 worker를 실행
 */
export async function initMsw() {
  // 서버 환경
  if (typeof window === 'undefined') {
    const { server } = await import('../mocks/server');
    server.listen();
  }
  // 클라이언트 환경
  else {
    const { worker } = await import('../mocks/browser');
    await worker.start();
  }
}
