/** RFC 3696 로컬 파트 최대 길이 */
export const MAX_LOCAL_PART_LENGTH = 64;

/** RFC 3696 이메일 전체 최대 길이 */
export const MAX_EMAIL_LENGTH = 254;

/**
 * RFC 5321/5322 실용 패턴 (JavaScript 호환)
 * - dot-atom + quoted-string 로컬 파트
 * - DNS 도메인 또는 IP/domain-literal
 * - 연속 점(..) 거부
 * 참고: https://zenn.dev/riya_amemiya/articles/e0270cef8eed0f
 */
const RFC5322_EMAIL_REGEX =
  /^(?!.*\.\.)(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[^"\\]|\\[\s\S]){0,62}")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+|\[(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3}|IPv6:[0-9a-fA-F:]+)\])$/i;

/**
 * 이메일 문자열이 RFC 5322 형식과 RFC 3696 길이 제한을 만족하는지 검증한다.
 * @param {string} email - 검증할 이메일 주소
 * @returns {boolean} 유효하면 true, 아니면 false
 */
export function isValidEmail(email) {
  if (typeof email !== 'string') {
    return false;
  }

  const atIndex = email.lastIndexOf('@');
  if (atIndex <= 0) {
    return false;
  }

  if (atIndex > MAX_LOCAL_PART_LENGTH) {
    return false;
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return false;
  }

  return RFC5322_EMAIL_REGEX.test(email);
}
